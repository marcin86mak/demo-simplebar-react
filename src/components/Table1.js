import React from "react";
import {Card, CardBody, CardHeader, Table} from "reactstrap";
import SimpleBar from "simplebar-react";
import _ from "lodash";

export const Table1 = ({maxHeight}) => {

    return (
        <Card style={{height: '100%', position: 'relative'}}>
            <CardHeader className={'drag-header'}>
                Table1 - Drag & Drop of Heder
            </CardHeader>
            <CardBody>
                <Table style={{height: '100%', position: 'relative'}} className={'table-header'}
                       bordered
                       borderless
                       hover
                       responsive
                       size="sm"
                       striped
                >
                    <thead>
                    <tr>
                        <th className='col-2'>
                            #
                        </th>
                        <th className='col-3'>
                            First Name
                        </th>
                        <th className='col-3'>
                            Last Name
                        </th>
                        <th className='col-4'>
                            Username
                        </th>
                    </tr>
                    </thead>
                </Table>
                <SimpleBar style={{maxHeight: maxHeight}}>
                    <Table
                           bordered
                           borderless
                           hover
                           responsive
                           size="sm"
                           striped
                    >
                        <tbody>
                        {
                            _.range(0, 125).map((lp) => {

                                return (
                                    <tr key={lp}>
                                        <th scope="row" className='col-2'>
                                            {lp}
                                        </th>
                                        <td className='col-3'>
                                            Mark
                                        </td>
                                        <td className='col-3'>
                                            Otto
                                        </td>
                                        <td className='col-4'>
                                            @mdo
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </SimpleBar>
            </CardBody>
        </Card>
    )
}