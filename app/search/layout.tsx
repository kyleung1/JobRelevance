import Search from "./Search"

export default function SearchLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <aside className="grid grid-cols-2 gap-3">
            <div className="">
              <Search/>
            </div>
            <div className="">
              {children}
            </div>
        </aside>
      </>
    );
  }