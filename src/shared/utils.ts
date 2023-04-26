
export const loadContent = (
  status:string,
  loadingElement:JSX.Element,
  succededElement:JSX.Element,
  fialedElement:JSX.Element
  ):JSX.Element =>  {
  const checkStatus: {[key: string]:JSX.Element } = {
    loading: loadingElement,
    succeded: succededElement,
    failed: fialedElement
  }

  return checkStatus[status]
}