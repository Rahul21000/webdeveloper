import './Connected.css';

const Connected=()=>{
    const name='Vishnu Swaroop';
    const position='Full stack developer';
    const companyName='@Oruphones';

    return(
        <div className='rectangle'>
        <img src='/Images/Ellipse 255.svg' alt='girl'/>
         <div className='name-r'>{name} </div>
         <div className='position-r'>{position} </div>
         <div className='company-r'>{companyName} </div>
         <button type='button'>Remove Connection</button>
        </div>
    );
};
export default Connected;