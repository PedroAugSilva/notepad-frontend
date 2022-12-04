import {Selector} from './style';
import bgLight from '../../assets/bg-theme-light.png'
import bgDark from '../../assets/bg-theme-dark.png'
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

const ThemeSelector = ({setThemeSelected, themeSelected}) => {
  

  const handleChange = (e) => {
    const input = e.target;
    if(input.checked){
      if(input.value === 'light'){
        setThemeSelected(light);
      } else if (input.value === 'dark'){
        setThemeSelected(dark)
      }
    }
  }
  return ( 
    <>
    <Selector themeSelected={themeSelected} layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="theme">
        <input type="radio" name='radio' value='light' id='input' onChange={handleChange}/>
        <label htmlFor="input" className='label'></label>
        <p>Light</p>
      </div>
        <figure>
          <img src={bgLight} alt="" />
        </figure>
    </Selector>
    <Selector themeSelected={themeSelected} layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <div className="theme">
        <input type="radio" name='radio' value='dark' id='input' onChange={handleChange}/>
        <label htmlFor="input" className='label'></label>
        <p>Dark</p>
      </div>
        <figure>
          <img src={bgDark} alt="" />
        </figure>
    </Selector>
    </>
  )
}

export default ThemeSelector