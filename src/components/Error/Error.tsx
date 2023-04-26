
export const Error = ( {message}: { message: string}): JSX.Element => {

  return (
    <div>
      <p>Error: {message}</p>
    </div>
  )
}