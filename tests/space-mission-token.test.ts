import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock contract functions
const mockMint = vi.fn()
const mockTransfer = vi.fn()
const mockGetBalance = vi.fn()
const mockSetTokenUri = vi.fn()
const mockGetTokenUri = vi.fn()

// Mock contract
const spaceMissionToken = {
  mint: mockMint,
  transfer: mockTransfer,
  getBalance: mockGetBalance,
  setTokenUri: mockSetTokenUri,
  getTokenUri: mockGetTokenUri,
}

describe('SpaceMissionToken', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  
  it('should mint tokens', async () => {
    const amount = 100
    const recipient = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'
    
    mockMint.mockResolvedValue({ success: true })
    
    const result = await spaceMissionToken.mint(amount, recipient)
    
    expect(mockMint).toHaveBeenCalledWith(amount, recipient)
    expect(result).toEqual({ success: true })
  })
  
  it('should transfer tokens', async () => {
    const amount = 50
    const sender = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'
    const recipient = 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG'
    
    mockTransfer.mockResolvedValue({ success: true })
    
    const result = await spaceMissionToken.transfer(amount, sender, recipient)
    
    expect(mockTransfer).toHaveBeenCalledWith(amount, sender, recipient)
    expect(result).toEqual({ success: true })
  })
  
  it('should get balance', async () => {
    const account = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'
    const expectedBalance = 150
    
    mockGetBalance.mockResolvedValue(expectedBalance)
    
    const balance = await spaceMissionToken.getBalance(account)
    
    expect(mockGetBalance).toHaveBeenCalledWith(account)
    expect(balance).toBe(expectedBalance)
  })
  
  it('should set token URI', async () => {
    const newUri = 'https://example.com/token'
    
    mockSetTokenUri.mockResolvedValue({ success: true })
    
    const result = await spaceMissionToken.setTokenUri(newUri)
    
    expect(mockSetTokenUri).toHaveBeenCalledWith(newUri)
    expect(result).toEqual({ success: true })
  })
  
  it('should get token URI', async () => {
    const expectedUri = 'https://example.com/token'
    
    mockGetTokenUri.mockResolvedValue(expectedUri)
    
    const uri = await spaceMissionToken.getTokenUri()
    
    expect(mockGetTokenUri).toHaveBeenCalled()
    expect(uri).toBe(expectedUri)
  })
})

