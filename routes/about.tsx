import { NavigateFunction, useNavigate } from "react-router-dom"
import { Title } from "@mui/icons-material";

export const About = () => {
  const navigation: NavigateFunction = useNavigate()

  const onNextPage = (): void => {
    navigation("/")
  }

  return (
    <div style={{ padding: 30 }}>
      <Title>About page</Title>
      <div>
        <p>
          <a href={"https://github.com/YOSVU"}>
            YOSVU
          </a>
        </p>
      </div>

      <button onClick={onNextPage}>Home</button>
    </div>
  )
}
