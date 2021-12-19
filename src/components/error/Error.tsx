/***********************Error**************************/
import React from 'react';
import s from './error.module.css'

export const SpanError: React.FC<ErrorPropsType> = ({message, className}) => {
    const finalClassName = className ? className : s.spanError
    return (
        <span className={finalClassName}>{message}</span>
    )
}

type ErrorPropsType = {
    className?: string
    message: string
}

/**********************************************************/