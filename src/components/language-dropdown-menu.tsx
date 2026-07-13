import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../store/reducers/language-slice'
import useCursorSize from '../lib/use-cursor-size'

type LanguageState = {
  language: {
    language: string
  }
}

const LanguageDropdownMenu = () => {
  const currentLanguage = useSelector((state: LanguageState) => state.language.language)
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const { setCursorSize } = useCursorSize()
  const dispatch = useDispatch()

  const onClickOption = (language: string) => {
    dispatch(setLanguage(language))
    setDropdownVisible(false)
  }

  const languages = [
    { language: 'English', value: 'en', flag: '🇺🇸' },
    { language: 'Românǎ', value: 'ro', flag: '🇷🇴' }
  ]

  return (
    <>
      <div
        onClick={() => setDropdownVisible(!dropdownVisible)}
        className="flex gap-2 items-center hover:cursor-pointer hover:opacity-70 transition-all"
        onMouseOver={() => setCursorSize(50)}
        onMouseLeave={() => setCursorSize(40)}
      >
        {languages
          .filter((lang) => lang.value === currentLanguage)
          .map((lang) => (
            <p key={lang.language}>{lang.language}</p>
          ))}
        <img src="./src/assets/dropdown-menu-icon.svg" className="w-[12px]" />
      </div>

      <div
        style={{ display: dropdownVisible ? 'block' : 'none' }}
        className="w-[120px] absolute bg-[#2A2A2A]/10 backdrop-blur-sm rounded-md top-14 translate-x-[255px] border border-[#6E6E6E]/30"
      >
        {languages.map((lang, index) => (
          <div
            key={lang.language}
            onClick={() => onClickOption(lang.value)}
            className={`flex gap-2 justify-between items-center cursor-pointer py-1 px-2 pt-[10px] pb-2 ${
              index !== languages.length - 1 && 'border-b border-[#6E6E6E]'
            }`}
            onMouseOver={() => setCursorSize(50)}
            onMouseLeave={() => setCursorSize(40)}
          >
            <p>{lang.language}</p>
            <p>{lang.flag}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default LanguageDropdownMenu

// setCurrentLanguage(language)
// i18next.changeLanguage(language)
// setDropdownVisible(false)
// localStorage.setItem('language', language)
