import React from "react"

interface ListProps {
  children?:  JSX.Element | Array<JSX.Element> | undefined | Array<undefined> | Element | Array<Element> | object | string,
}

export const List: React.FC<ListProps> = (props) => {
  return (
  <ul className="pl-2 pb-1">{props.children}</ul>
  )
}

interface ListItemProps {
  children?:  JSX.Element | Array<JSX.Element> | undefined | Array<undefined> | Element | Array<Element> | object | string,
  n?: boolean
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <li style={{
      listStyleType: "disc"
    }} className={props.n ? "pb-.75": ""}>{props.children}</li>
  )
}