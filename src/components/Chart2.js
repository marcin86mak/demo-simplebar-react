import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {Card, CardBody, CardHeader} from "reactstrap";
import SimpleBar from "simplebar-react";
import _ from "lodash";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => _.random(0, 1000)),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => _.random(0, 1000)),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function Chart2({maxHeight}) {

    return (
        <Card style={{height: '100%', position: 'relative', overflowX: 'auto'}}>
            <CardHeader className={'drag-header'}>
                Chart2 - Drag & Drop of Heder
            </CardHeader>
            <CardBody>
                <SimpleBar style={{maxHeight: maxHeight}} >
                    <Bar options={options} data={data}/>
                </SimpleBar>
            </CardBody>
        </Card>
    )
}
