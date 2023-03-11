import { useRouter } from "next/router"

export default function IdPort() {

    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)

    return (
      <div>
        <h3>This is IdPort Page</h3>
      </div>
    )
  }