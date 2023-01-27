import './styles.css';
import  { ReactComponent as StarImage }  from '../../assets/images/image3.svg';

const MovieDetails = () => {

    return (
        <main className='details-screen'>
            <h1>Tela detalhes do filme id: 1</h1>

            <div className='valuation-container'>
                <form action="" className='form-container'>
                    <input type="text" 
                    placeholder='Deixe sua avaliação aqui' />
                    <button>Salvar Avaliação</button>
                </form>
            </div>
            <div className='assessments-container'>
                    <div className='name-container'>
                        <StarImage></StarImage>
                        <h3>Maria Silva</h3>
                    </div>
                    <div className='comment'>
                        <div className='comment-container'>
                            <p>
                            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
                            </p>
                        </div>
                    </div>


                    <div className='name-container'>
                        <StarImage></StarImage>
                        <h3>Maria Silva</h3>
                    </div>
                    <div className='comment'>
                        <div className='comment-container'>
                            <p>
                            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
                            </p>
                        </div>
                    </div>


                    <div className='name-container'>
                        <StarImage></StarImage>
                        <h3>Maria Silva</h3>
                    </div>
                    <div className='comment'>
                        <div className='comment-container'>
                            <p>
                            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
                            </p>
                        </div>
                    </div>


                    

            </div>
        </main>
    );
}

export default MovieDetails;