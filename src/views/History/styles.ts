import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
        background-color: ${({ theme }) => theme['gray-600']};
        padding: 1rem;
        text-align: left;
        color: ${({ theme }) => theme['gray-100']};
        font-size: .875rem;
        line-height: 1.6;

        &:first-child {
            border-top-left-radius: 8px;
            padding-left: 1.5rem;
        }

        &:last-child {
            border-top-right-radius: 8px;
            padding-right: 1.5rem;
        }
    }

    td {
      background-color: ${({ theme }) => theme['gray-700']};     
      border-top: 1px solid ${({ theme }) => theme['gray-800']};
      padding: 1rem;
      font-size: .875rem;
      line-height: 1.6;   

      &:first-child {
            width: 50%;
            padding-left: 1.5rem;
        }

      &:last-child {
          padding-right: 1.5rem;
      }
    }

  }

`

const statusColors = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
  gray: 'gray-500'
} as const

interface StatusHistoryProps {
  statusColor: keyof typeof statusColors
}

export const StatusHistory = styled.span<StatusHistoryProps>`
  display: flex;
  align-items: center;
  gap: .5rem;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.theme[statusColors[props.statusColor]]};
  }

`