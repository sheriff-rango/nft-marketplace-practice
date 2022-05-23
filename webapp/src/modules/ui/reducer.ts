import { combineReducers } from 'redux'
import { assetReducer as asset, AssetUIState } from './asset/reducer'
import { nftReducer as nft, NFTUIState } from './nft/reducer'
import { browseReducer as browse, BrowseUIState } from './browse/reducer'

export type UIState = {
  asset: AssetUIState
  nft: NFTUIState
  browse: BrowseUIState
}

export const uiReducer = combineReducers({
  asset,
  nft,
  browse
})