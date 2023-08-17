import styled from "styled-components"

export const Container = styled.div`
  background-color: #f4f6f9;
  margin: 0;
  font-family: "Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;

  code {
    font-size: 87.5%;
    color: #e83e8c;
    word-wrap: break-word;
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    background-color: transparent;
    border-collapse: collapse;

    td, th {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }

    &.text-center {
      td, th {
        text-align: center;
      }
    }

    &.table-bordered {
      td, th {
        border: 1px solid #dee2e6;
      }
    }
  }
`
