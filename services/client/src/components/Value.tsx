 /* eslint-disable */

import React, { useRef } from 'react';

import useHover from '../useHover';

interface ValueProps {
    value: string;
    definition: string;
}

export const Value: React.FC<ValueProps> = ({ value, definition }): JSX.Element => {
    const hoverRef = useRef(null);
    const isHover = useHover(hoverRef);

    return (
        <div ref={hoverRef} className='value'>{ isHover ? definition : value}</div>
    );
    };