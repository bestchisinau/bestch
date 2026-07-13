import CustomButton from './custom-button'
import { useSelector, useDispatch } from 'react-redux'
import { setDialogVisibility } from '../store/reducers/dialog-visible-slice'
import { useEffect } from 'react'

type StateProps = {
  dialog: {
    visible: boolean
  }
}

const Dialog = () => {
  const visible = useSelector((state: StateProps) => state.dialog.visible)
  const dispatch = useDispatch()

  useEffect(() => {
    visible
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '')
  }, [visible])

  return (
    <div
      className="w-screen h-screen fixed justify-center items-center z-40 bg-black/40 px-8"
      style={{ display: visible ? 'flex' : 'none' }}
      onClick={() => dispatch(setDialogVisibility())}
    >
      <div
        className="w-[600px] bg-black text-white flex flex-col sm:p-10 p-6 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="sm:text-4xl text-xl">Contact us</h2>
        <p className="sm:text-lg text-sm font-light opacity-80">
          loremipsum@mediaunbothered.tech
        </p>
        <input
          type="email"
          placeholder="Email..."
          className="sm:px-4 px-2 sm:py-3 py-1.5 text-sm ms:text-base bg-transparent rounded-lg border border-white mb-4 mt-6 outline-0"
        />
        <textarea
          placeholder="Message..."
          className="h-32 sm:px-4 px-2 sm:py-3 p-1.5 text-sm sm:text-base bg-transparent rounded-lg border border-white mb-6 outline-0 resize-none"
        />
        <CustomButton
          innerText="Send."
          styles="sm:text-[20px] text-base sm:px-[50px] px-[30px] sm:py-[11px] py-[8px]"
          imgStyles="sm:min-w-[40px] min-w-[20px] -right-3"
        />
      </div>
    </div>
  )
}

export default Dialog
