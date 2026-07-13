import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '../store/reducers/language-slice'
import dropdownMenuIcon from '../assets/dropdown-menu-icon.svg'

type LanguageState = {
  language: {
    language: string
  }
}

const MobileLanguageDropdownMenu = () => {
  const currentLanguage = useSelector((state: LanguageState) => state.language.language)
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const dispatch = useDispatch()

  const onClickButton = (language: string) => {
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
        className="flex justify-center gap-4 cursor-pointer"
      >
        <button className="text-6xl font-semibold opacity-80 hover:opacity-100 transition-all">
          {languages
            .filter((lang) => lang.value === currentLanguage)
            .map((lang) => lang.language)}
        </button>

        <img
          src={dropdownMenuIcon}
          className={`w-[24px] transition-all duration-300 ${
            dropdownVisible ? 'rotate-180' : 'rotate-0'
          }`}
          loading="lazy"
        />
      </div>

      <div className={`${dropdownVisible ? 'block' : 'hidden'}`}>
        {languages
          .filter((lang) => lang.value !== currentLanguage)
          .map((lang) => (
            <button
              key={lang.language}
              className="text-4xl font-normal opacity-80 hover:opacity-100 transition-all"
              onClick={() => onClickButton(lang.value)}
            >
              {lang.language}
            </button>
          ))}
      </div>
    </>
  )
}

export default MobileLanguageDropdownMenu
