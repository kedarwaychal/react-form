import React from 'react'
import Card from 'react-bootstrap/Card';

function Forms() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        contactEmail: '',
      });
    
      const [cards, setCards] = useState([]);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setCards([...cards, formData]);
        setFormData({ firstName: '', lastName: '', username: '', contactEmail: '' });
      };
    
      const handleEdit = (index) => {
        const selectedCard = cards[index];
        setFormData(selectedCard);
        setCards(cards.filter((_, i) => i !== index));
      };
    
      const handleDelete = (index) => {
        setCards(cards.filter((_, i) => i !== index));
      };
    
      return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card p-4'>
                        <form onSubmit={handleSubmit}>
                            <label>
                            First Name:
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                            </label>
                            <br />
                            <label>
                            Last Name:
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                            </label>
                            <br />
                            <label>
                            Username:
                            <input type="text" name="username" value={formData.username} onChange={handleChange} />
                            </label>
                            <br />
                            <label>
                            Contact Email:
                            <input type="text" name="contactEmail" value={formData.contactEmail} onChange={handleChange} />
                            </label>
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    {cards.map((card, index) => (
            <div key={index} className='card'>
                <Card style={{ width: '18rem' }}>
                    <p className='card.title'>First Name: {card.firstName}</p>
                    <p>Last Name: {card.lastName}</p>
                    <p>Username: {card.username}</p>
                    <p>Contact Email: {card.contactEmail}</p>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button className='Button' onClick={() => handleDelete(index)}>Delete</button>
              </Card>
            </div>
          
          ))}
    
                </div>
            </div>
        </div>
      );
}

export default Forms