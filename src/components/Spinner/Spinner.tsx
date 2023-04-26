import { Fragment } from "react"
import './Spinner.scss'

export const Spinner = () => {
  return (
  <Fragment>
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Fragment>
  )
}
