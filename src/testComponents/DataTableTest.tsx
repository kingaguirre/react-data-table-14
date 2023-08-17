import React, { useState } from 'react';
import { DataTable, exportToCsv } from '../DataTable';

const dataSource = Array(100).fill("").map((_, i) => ({
  userID: `user-id${i}`,
  username: `test-username${i}`,
  password: `test-password${i}`,
  userDetails: {
    email: `test${i}@email.com`,
    isAdmin: i % 2 === 0,
    other: `other value${i}`,
    birthDay: `24-08-199${i}`,
    firstName: `John${i}`,
    lastName: `Doe${i}`,
    phoneNumber: `123-456-78${i}0`,
    address: `${i}23 Main St`,
    city: 'New York',
    state: 'NY',
    zipCode: `1000${i}`,
  },
  userAccounts: [
    { account1: `test account1-${i}` },
    { account2: `test account2-${i}` },
    { account3: { accountNumber: `test account number 3-${i}` } },
  ],
}));

const columnSettings = [
  {
    column: 'username',
    title: 'Username',
    align: 'center',
    pinned: true,
    filterBy: {
      type: 'text',
      value: '',
    },
  },
  {
    column: 'password',
    title: 'Password',
    width: '200px',
    sorted: 'none'
  },
  {
    column: 'userDetails.email',
    title: 'Email',
    groupTitle: 'User Details',
    order: 1,
    pinned: true
  },
  {
    column: 'userDetails.isAdmin',
    title: 'Is Admin',
    groupTitle: 'User Details',
    order: 0,
    pinned: 'none',
    filterBy: {
      type: 'select',
      value: '',
      options: [{
        text: 'clear',
        value: ''
        },{
        text: 'admin',
        value: 'true'
        },{
        text: 'clerk',
        value: 'false'
        }]
    },
  },
  {
    column: 'userDetails.other',
    title: 'Other',
    groupTitle: 'User Details',
  },
  {
    column: 'userDetails.birthDay',
    title: 'Birth Day',
    groupTitle: 'User Details',
    order: 5
  },
  {
    column: 'userDetails.firstName',
    title: 'First Name',
    groupTitle: 'User Details',
  },
  {
    column: 'userDetails.lastName',
    title: 'Last Name',
    groupTitle: 'User Details',
  },
  {
    column: 'userDetails.phoneNumber',
    title: 'Phone Number',
    groupTitle: 'User Details',
  },
  {
    column: 'userDetails.address',
    title: 'Address',
    groupTitle: 'User Details',
  },
  {
    column: 'userDetails.city',
    title: 'City',
  },
  {
    column: 'userDetails.state',
    title: 'State',
  },
  {
    column: 'userDetails.zipCode',
    title: 'Zip Code',
  },
  {
    column: 'userAccounts[0].account1',
    title: 'Account 1',
    groupTitle: 'User Accounts',
    hidden: true
  },
  {
    column: 'userAccounts[1].account2',
    title: 'Account 2',
    groupTitle: 'User Accounts',
    hidden: true
  },
  {
    column: 'userAccounts[2].account3',
    title: 'Account 3',
    groupTitle: 'User Accounts',
    hidden: true
  },
  {
    column: 'userID',
    title: '#',
    pinned: "none",
    sorted: "none",
    align: "center",
    customColumnRenderer: (value: any) => <button onClick={e => {
      e.stopPropagation();
      console.log(`button ${value} clicked`)
    }} style={{fontSize: 5}}>Button {value}</button>
  },
];

export default () => {
  const [selectedRow, setSselectedRow] = useState<any>(null);

  const handleRowClick = (rowData: any) => {
    console.log("Clicked row:", rowData);
  };

  const handleRowDoubleClick = (rowData: any) => {
    console.log("Double-clicked row:", rowData);
  };

  const handleColumnSettingsChange = (newColumnSettings: any) => {
    console.log("Column settings:", newColumnSettings);
  };

  return (
    <div style={{padding: 16}}>
      <DataTable
        // dataSource={dataSource}
        fetchConfig={{
          endpoint: 'http://localhost:3000/custom-items/{pageNumber}/{pageSize}/{sortColumn}/{sortDirection}?searchString={searchString}',
          // requestData: { someKey: 'someValue' },
          responseDataPath: "data.dataTableItem",
          responseTotalDataPath: "data.count"
        }}
        columnSettings={columnSettings}
        onRowClick={handleRowClick}
        onRowDoubleClick={handleRowDoubleClick}
        rowKey="userID"
        selectable
        collapsibleRowRender={(rowData) => (<div>This is a collapsible row for {JSON.stringify(rowData)}</div>)}
        onColumnSettingsChange={handleColumnSettingsChange}
      />
      <div style={{height: 200}}/>
      <button onClick={() => exportToCsv("data.csv", selectedRow, columnSettings)}>download selected</button>
    <DataTable
      dataSource={dataSource}
      columnSettings={columnSettings}
      onRowClick={handleRowClick}
      onRowDoubleClick={handleRowDoubleClick}
      rowKey="userID"
      activeRow="user-id2"
      // selectedRows={[{"userID": "user-id0"}]}
      selectedRows={["user-id0"]}
      selectable
      downloadCSV
      collapsibleRowRender={() => (
        <DataTable
          dataSource={dataSource}
          columnSettings={[{
            column: 'userDetails.birthDay',
            title: 'Birth Day',
            order: 5,
            width: "200px"
          },
          {
            column: 'userDetails.firstName',
            title: 'First Name',
            width: "150px"
          }]}
          rowKey="userID"
          clickableRow
        />
      )}
      onColumnSettingsChange={handleColumnSettingsChange}
      onPageIndexChange={e => console.log(`Page index: ${e}`)}
      onPageSizeChange={e => console.log(`Page size: ${e}`)}
      onSelectedRowsChange={rows => setSselectedRow(rows)}
    />
    </div>
  )
}
