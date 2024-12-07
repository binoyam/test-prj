import './Home.css'
const Home = () => {
  return (
    <div className="home_page">
      <form className='form'>
        <label className='label'>
          <input type="text" placeholder='Message psycayatricst' />
        </label>
        <button type='submit' className='submit'>Send</button>
      </form>
    </div>
  );
};

export default Home;
