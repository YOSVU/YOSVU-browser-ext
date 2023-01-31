import { NavigateFunction, useNavigate } from "react-router-dom"

export const Home = () => {
  const navigation: NavigateFunction = useNavigate()

  const onNextPage = (): void => {
    navigation("/about")
  }

  return (
    <div style={{ padding: 30 }}>
      <span>Home page</span>
      <button onClick={onNextPage}>About</button>
    </div>
  )
}
