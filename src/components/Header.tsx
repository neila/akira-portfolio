import { PageLink } from "@/components/atoms/links/PageLink";

const Header = () => {
  const MainMenu = () => {
    return (
      <nav id="menu" className="py-4 flex flex-wrap justify-center">
        <h3 className="-space-x-[1.8rem]">
          {/* TODO (3): replace with drop cap */}
          <PageLink href="/">🏠</PageLink>&emsp;
          <PageLink href="/about">SITE</PageLink>&emsp;
          <PageLink href="/me">ME</PageLink>&emsp;
          <PageLink href="/changelog">CHANGES</PageLink>
        </h3>
      </nav>
    );
  };

  return (
    <>
      <div className="py-4 justify-center">
        <MainMenu />
      </div>
    </>
  );
};

export default Header;
