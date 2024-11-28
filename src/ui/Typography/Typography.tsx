import { ReactNode, FC, createElement } from 'react'

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyProps = {
    tag?: TagVariants
    style?: string
    children: ReactNode
}

export const Typography: FC<TypographyProps> = ({tag='p', style, children }) => createElement(tag, {className:`${style}`}, children);
