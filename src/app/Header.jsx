import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { headerNavLinks } from "../data/navLinks";
import { useRouter } from "next/router";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const listener = () => {
      setScroll(window.scrollY / 100);
      return;
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <div className={styles.everything} style={{}}>
        <div className="flex w-full flex-row justify-between bg-[color:var(--grey-1)] px-[min(10vw,50px)] py-[10px] text-[14px] text-[color:var(--grey-2)]">
          <div className="flex flex-row">
            <Link href="http://bracketcs.org" style={{ padding: "0px 15px" }}>
              <Image
                className="my-[2px]"
                src="/bracketcs-icon.svg"
                alt="BracketCS logo"
                width="51"
                height="30"
              />
            </Link>
            <div className=" text-normal hidden xl:flex">
              {headerNavLinks.map((e) => (
                <HeaderLink url={e.href} text={e.title} key={e.title} />
              ))}
            </div>
          </div>
          <div className=" hidden xl:flex">
            <Link href="/register" className={styles.register}>
              Register
            </Link>
            <Link href="/signin" className={styles.signin}>
              Sign In
            </Link>
          </div>
          {!open && (
            <div className="block xl:hidden">
              <button onClick={() => toggleOpen()}>
                <HiMenuAlt3 size="30px" />
              </button>
            </div>
          )}

          {open && (
            <div className="block xl:hidden">
              <button onClick={() => toggleOpen()}>
                <MdClose size="30px" />
              </button>
            </div>
          )}
        </div>
        {open && (
          <div className=" h-[100vh] w-[100vw] backdrop-blur-lg  xl:hidden ">
            <div className="h-full w-full bg-[color:var(--grey-1)] opacity-60">
              <div className="flex h-[80vh] flex-col items-center justify-between py-[5vh]  text-2xl opacity-100 ">
                {headerNavLinks.map((e) => (
                  <HeaderLink url={e.href} text={e.title} key={e.title} />
                ))}
                <Link
                  href="/register"
                  className={styles.register}
                  onClick={() => setOpen(false)}
                >
                  Register
                </Link>
                <Link
                  href="/signin"
                  className={styles.signin}
                  onClick={() => setOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
  function HeaderDropdown({ children, ...props }) {
    return <></>;
  }

  function HeaderLink(props) {
    const router = useRouter();
    return (
      <div
        className={
          styles.headerlink +
          " " +
          (router.pathname === props.url ? "text-blue-400" : "")
        }
      >
        <Link href={props.url} onClick={() => setOpen(false)}>
          {props.text}
        </Link>
        <div />
      </div>
    );
  }
}
