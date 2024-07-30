import React, {FC} from 'react';
import {CarWithAuthModel} from "../models/CarWithAuthModel";

interface IProps {
    cars: CarWithAuthModel[];
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map((car, i) => (<div>
                    {i+1}.{car.brand}
                    <p>{car.year}</p>
                    <p>{car.price}</p>
                </div>))
            }
        </div>
    );
};

export default CarsComponent;