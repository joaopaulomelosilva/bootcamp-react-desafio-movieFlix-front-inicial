import './styles.css';
import  { ReactComponent as ImageHome }  from '../../assets/images/Desenho.svg';


const Home = () => {

    return(
        <main className='home-container'>
            <div className='home-content'>
                <h1>Avalie Filmes</h1>

                <p>Diga o que você achou do seu filme favorito</p>

                <ImageHome></ImageHome>
            </div>
            <div className='login-container'>
                <h1>Login</h1>
                <form action="" className='form-content'>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Senha'/>
                    <button>Fazer Login</button>
                </form>
            </div>
        </main>
    );
}

export default Home; 