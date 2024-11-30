import { ReactNode, FC, createElement } from 'react'

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyProps = {
    tag?: TagVariants
    className?: string
    weight?: number
    children: ReactNode
}

export const Typography: FC<TypographyProps> = ({tag='p', className='text-[1.4rem]', weight='400', children }) => createElement(tag, {className, style: {fontWeight:`${weight}`}}, children);
