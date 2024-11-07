import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import PasswordInput from "@/components/common/PasswordInput";
import AppBar from "@/components/layout/AppBar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

const LoginPage = () => {
  return (
    <section className="min-h-screen space-y-12">
      <AppBar />

      <div className="w-full max-w-2xl mx-auto px-8">
        <Card className="space-y-6 px-8 py-12">
          <div className="mx-auto w-fit text-center">
            <h1 className="text-xl md:text-2xl font-bold mb-1">Log in</h1>
            <h2 className="text-xl">Chef finder</h2>
          </div>

          <div className="flex">
            <Link
              href={"/login"}
              className={cn(
                "flex-1 text-center px-4 py-3 font-semibold rounded-s-xl",
                "bg-primary text-white hover:bg-primary/80"
              )}
            >
              Log in as a customer
            </Link>

            <Link
              href={"/login"}
              className={cn(
                "flex-1 text-center px-4 py-3 font-semibold rounded-e-xl",
                "bg-primary/10 hover:bg-primary/15"
              )}
            >
              Log in as a chef
            </Link>
          </div>

          <form action="">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email_mobile"
                    className="block text-sm font-medium"
                  >
                    Email or mobile phone number
                  </label>

                  <Input type="text" id="email_mobile" required />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium"
                  >
                    Your password
                  </label>

                  <PasswordInput />

                  <Link
                    href="/forgot-password"
                    className="block text-sm text-primary hover:text-primary/80"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl font-semibold"
                size={"lg"}
              >
                Log in
              </Button>
            </div>
          </form>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              href={"/register"}
              className="text-primary font-semibold hover:text-primary/80"
            >
              Sign up
            </Link>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default LoginPage;
