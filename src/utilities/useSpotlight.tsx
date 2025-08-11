import { useEffect, useState, type RefObject } from 'react'
interface position {
    x: number,
    y: number
}

const useSpotlight = (ref: RefObject<HTMLElement>) => {

    const [position, setposition] = useState<position>({ x: 0, y: 0 })

    useEffect(() => {

        const incoming_div = ref.current;

        function MouseMove(e: MouseEvent) {

            const relative_positions = incoming_div.getBoundingClientRect();

            setposition({ x: (e.clientX - relative_positions.left), y: (e.clientY - relative_positions.top) })
        }
        incoming_div.addEventListener("mousemove", MouseMove)
        return () => {
            incoming_div.removeEventListener('mousemove', MouseMove);
        };

    }, [ref])
    return position;
}

export default useSpotlight