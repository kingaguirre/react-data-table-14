import styled from 'styled-components';

export const MainHeaderWrapper = styled.div`
  background-color: white;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  z-index: 1;
  border: 1px solid #ddd;
`;

export const SearchWrapper = styled.div`
  width: 50%;
  max-width: 320px;
  position: relative;
  > i {
    position: absolute;
    top: 1px;
    right: 1px;
    right: 1px;
    font-size: 12px;
    z-index: 1;
    height: calc(100% - 2px);
    border-radius: 2px;
    width: 24px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > input {
    width: 100%;
  }
`;

export const ControlsWrapper = styled.div`
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: -6px -16px -6px 0;
  height: 38px;
  align-items: stretch;
  > * {
    background-color: #e1e1e1;
    padding: 0 16px;
    color: #222;
    background: transparent;
    transition: all .3s ease;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #d1d1d1;
    }
  }
`;

export const SettingsContainer = styled.div`
  position: absolute;
  top: 40px;
  background-color: white;
  overflow: hidden;
  overflow-y: auto;
  right: 0;
  width: 200px;
  display: none;
  box-shadow: -3px 0 6px 0 #ddd;
  border-left: 1px solid #ddd;
  height: calc(100% - 88px);
  z-index: 10;
  &.is-visible {
    display: block;
  }
  > label {
    display: flex;
    align-items: center;
    transition: all .3s ease;
    padding: 4px 8px;
    &:not(:last-child) {
      border-bottom: 1px dashed #ddd;
    }
    cursor: pointer;
    &:hover {
      background-color: #e1e1e1;
    }
  }
`;