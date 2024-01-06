import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';


const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    contactEmail: '',
  });

  const [cards, setCards] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target)
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
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card mt-2 p-4'>
                  <h1 className='card-title text-center'>Form</h1>
                    <form onSubmit={handleSubmit} className='form'>
                        <div className='row'>
                          <div className='col-md-6'>
                              <label>
                            First Name:
                            <input type="text" className='form-control' name="firstName" value={formData.firstName} onChange={handleChange} />
                            </label>
                          </div>
                          <div className='col-md-6'>
                              <label>
                            Last Name:
                            <input type="text" className='form-control' name="lastName" value={formData.lastName} onChange={handleChange} />
                            </label>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-6'>                           
                            <label>
                            Username:
                            <input type="text" className='form-control' name="username" value={formData.username} onChange={handleChange} />
                            </label>
                          </div>
                          <div className='col-md-6'>
                              <label>
                            Contact Email:
                            <input type="text" className='form-control' name="contactEmail" value={formData.contactEmail} onChange={handleChange} />
                            </label>
                          </div>
                        </div>
                        <button type="submit" className='btn btn-primary mx-auto d-block mt-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='row'>
          {cards.map((card, index) => (
          <div key={index} className='card col-md-4 m-2'  style={{ width: '18rem', margin:'2rem 0rem' ,float:'left'}}>
                <div className='card-body'>
                <p className='card-title'>First Name: {card.firstName}</p>
                  <p>Last Name: {card.lastName}</p>
                  <p>Username: {card.username}</p>
                  <p>Contact Email: {card.contactEmail}</p>
                  <button  className='btn btn-primary' onClick={() => handleEdit(index)}>Edit</button>
                  <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
                </div>
          </div>
      ))}
        </div>    
    </div>
  );
};

export default Form;
