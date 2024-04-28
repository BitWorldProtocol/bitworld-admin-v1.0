import ReactDom  from "react-dom/client"
import Loading from "./loading"

export const showLoading = () => {
  const loading = document.getElementById('loading') as HTMLDivElement
  ReactDom.createRoot(loading).render(<Loading />)
}
