import React from "react"

export interface NavigationItemProps {
  children?: string,
  link?: string
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  return (
    <React.Fragment>
      <div className="md:w-9 text-center">
        <h2 className="md:text-2xl text-base font-bold capitalize leading-none w-full">
          <a href={props.link} className="hover:text-white navitem leading-none">
            {props.children}
          </a>
        </h2>
      </div>
    </React.Fragment>
  )
}

export default NavigationItem