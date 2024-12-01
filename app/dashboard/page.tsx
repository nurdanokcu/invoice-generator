import { signOut } from "../utils/auth";
import { requireUser } from "../utils/hooks";


export default async function DashboardRoute() {
  await requireUser();
  return (
    <div>
      <h1>Hello from the dashboard page</h1>
      <form
      action={async () => {
        "use server"
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
    </div>
  );
}