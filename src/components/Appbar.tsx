"use client"
import { useRouter } from "next/navigation";

export function Appbar() {
  const router = useRouter();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          router.push('/api/auth/signin');
        }}
      >
        signin
      </button>
      <button
        type="button"
        onClick={() => {
          router.push('/api/auth/signup');
        }}
      >
        signup
      </button>
    </div>
  );
}
