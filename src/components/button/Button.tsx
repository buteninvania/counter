/***********************Button**************************/
import React from 'react';
import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './button.module.css'



const Button: React.FC<DefaultButtonPropsType> = ({error, ...restProps}) => {
    const finalClassName = error ? s.error : s.default
    return <button className={finalClassName} {...restProps}/>
}

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> & {
    error?:boolean
}
export default Button
/**********************************************************/