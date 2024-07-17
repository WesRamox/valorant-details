import { ReactNode } from "react";

interface RightMenuProps {
  children: ReactNode
  className: string
}

const RightMenu = ({ children, ...props }: RightMenuProps) => {
  return ( 
    <div {...props}>
      {children}
    </div>
   )
}

export default RightMenu;