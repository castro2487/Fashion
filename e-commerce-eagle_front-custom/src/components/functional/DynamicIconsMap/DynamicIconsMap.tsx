import dynamic from 'next/dynamic';
import { DynamicIconProps } from '@amq';
export enum IconName {
  Account = 'account',
  Amex = 'amex',
  ArrowDown = 'arrowDown',
  ArrowLeft = 'arrowLeft',
  ArrowRight = 'arrowRight',
  ArrowUp = 'arrowUp',
  Audio = 'audio',
  Chat = 'chat',
  Close = 'close',
  CoinDown = 'coinDown',
  CoinRight = 'coinRight',
  CoinUp = 'coinUp',
  ColFive = 'colFive',
  ColFour = 'colFour',
  ColOne = 'colOne',
  ColThree = 'colThree',
  ColTwo = 'colTwo',
  Down = 'down',
  Filter = 'filter',
  Heart = 'heart',
  Hide = 'hide',
  Info = 'info',
  Language = 'language',
  List = 'list',
  Location = 'location',
  LogoHorizontal = 'logoHorizontal',
  LogoStacked = 'logoStacked',
  Map = 'map',
  Mastercard = 'mastercard',
  Menu = 'menu',
  Minus = 'minus',
  Pause = 'pause',
  PinIcon = 'pinIcon',
  Plus = 'plus',
  Search = 'search',
  ShoppingBag = 'shoppingBag',
  Success = 'success',
  Tick = 'tick',
  Up = 'up',
  Visible = 'visible',
  VolumeOff = 'volumeOff',
  VolumeOn = 'volumeOn',
  Warning = 'warning',
  World = 'world',
}

export const dynamicIconsMap = {
  [IconName.Account]: dynamic<DynamicIconProps>(() =>
    import('@icons/Account').then((module) => module)
  ),
  [IconName.Amex]: dynamic<DynamicIconProps>(() =>
    import('@icons/Amex').then((module) => module)
  ),
  [IconName.ArrowDown]: dynamic<DynamicIconProps>(() =>
    import('@icons/ArrowDown').then((module) => module)
  ),
  [IconName.ArrowLeft]: dynamic<DynamicIconProps>(() =>
    import('@icons/ArrowLeft').then((module) => module)
  ),
  [IconName.ArrowRight]: dynamic<DynamicIconProps>(() =>
    import('@icons/ArrowRight').then((module) => module)
  ),
  [IconName.ArrowUp]: dynamic<DynamicIconProps>(() =>
    import('@icons/ArrowUp').then((module) => module)
  ),
  [IconName.Audio]: dynamic<DynamicIconProps>(() =>
    import('@icons/Audio').then((module) => module)
  ),
  [IconName.Chat]: dynamic<DynamicIconProps>(() =>
    import('@icons/Chat').then((module) => module)
  ),
  [IconName.Close]: dynamic<DynamicIconProps>(() =>
    import('@icons/Close').then((module) => module)
  ),
  [IconName.CoinDown]: dynamic<DynamicIconProps>(() =>
    import('@icons/CoinDown').then((module) => module)
  ),
  [IconName.CoinRight]: dynamic<DynamicIconProps>(() =>
    import('@icons/CoinRight').then((module) => module)
  ),
  [IconName.CoinUp]: dynamic<DynamicIconProps>(() =>
    import('@icons/CoinUp').then((module) => module)
  ),
  [IconName.ColFive]: dynamic<DynamicIconProps>(() =>
    import('@icons/ColFive').then((module) => module)
  ),
  [IconName.ColFour]: dynamic<DynamicIconProps>(() =>
    import('@icons/ColFour').then((module) => module)
  ),
  [IconName.ColOne]: dynamic<DynamicIconProps>(() =>
    import('@icons/ColOne').then((module) => module)
  ),
  [IconName.ColThree]: dynamic<DynamicIconProps>(() =>
    import('@icons/ColThree').then((module) => module)
  ),
  [IconName.ColTwo]: dynamic<DynamicIconProps>(() =>
    import('@icons/ColTwo').then((module) => module)
  ),
  [IconName.Down]: dynamic<DynamicIconProps>(() =>
    import('@icons/Down').then((module) => module)
  ),
  [IconName.Filter]: dynamic<DynamicIconProps>(() =>
    import('@icons/Filter').then((module) => module)
  ),
  [IconName.Heart]: dynamic<DynamicIconProps>(() =>
    import('@icons/Heart').then((module) => module)
  ),
  [IconName.Hide]: dynamic<DynamicIconProps>(() =>
    import('@icons/Hide').then((module) => module)
  ),
  [IconName.Info]: dynamic<DynamicIconProps>(() =>
    import('@icons/Info').then((module) => module)
  ),
  [IconName.Language]: dynamic<DynamicIconProps>(() =>
    import('@icons/Language').then((module) => module)
  ),
  [IconName.List]: dynamic<DynamicIconProps>(() =>
    import('@icons/List').then((module) => module)
  ),
  [IconName.Location]: dynamic<DynamicIconProps>(() =>
    import('@icons/Location').then((module) => module)
  ),
  [IconName.LogoHorizontal]: dynamic<DynamicIconProps>(() =>
    import('@icons/LogoHorizontal').then((module) => module)
  ),
  [IconName.LogoStacked]: dynamic<DynamicIconProps>(() =>
    import('@icons/LogoStacked').then((module) => module)
  ),
  [IconName.Map]: dynamic<DynamicIconProps>(() =>
    import('@icons/Map').then((module) => module)
  ),
  [IconName.Mastercard]: dynamic<DynamicIconProps>(() =>
    import('@icons/Mastercard').then((module) => module)
  ),
  [IconName.Menu]: dynamic<DynamicIconProps>(() =>
    import('@icons/Menu').then((module) => module)
  ),
  [IconName.Minus]: dynamic<DynamicIconProps>(() =>
    import('@icons/Minus').then((module) => module)
  ),
  [IconName.Pause]: dynamic<DynamicIconProps>(() =>
    import('@icons/Pause').then((module) => module)
  ),
  [IconName.PinIcon]: dynamic<DynamicIconProps>(() =>
    import('@icons/PinIcon').then((module) => module)
  ),
  [IconName.Plus]: dynamic<DynamicIconProps>(() =>
    import('@icons/Plus').then((module) => module)
  ),
  [IconName.Search]: dynamic<DynamicIconProps>(() =>
    import('@icons/Search').then((module) => module)
  ),
  [IconName.ShoppingBag]: dynamic<DynamicIconProps>(() =>
    import('@icons/ShoppingBag').then((module) => module)
  ),
  [IconName.Success]: dynamic<DynamicIconProps>(() =>
    import('@icons/Success').then((module) => module)
  ),
  [IconName.Tick]: dynamic<DynamicIconProps>(() =>
    import('@icons/Tick').then((module) => module)
  ),
  [IconName.Up]: dynamic<DynamicIconProps>(() =>
    import('@icons/Up').then((module) => module)
  ),
  [IconName.Visible]: dynamic<DynamicIconProps>(() =>
    import('@icons/Visible').then((module) => module)
  ),
  [IconName.VolumeOff]: dynamic<DynamicIconProps>(() =>
    import('@icons/VolumeOff').then((module) => module)
  ),
  [IconName.VolumeOn]: dynamic<DynamicIconProps>(() =>
    import('@icons/VolumeOn').then((module) => module)
  ),
  [IconName.Warning]: dynamic<DynamicIconProps>(() =>
    import('@icons/Warning').then((module) => module)
  ),
  [IconName.World]: dynamic<DynamicIconProps>(() =>
    import('@icons/World').then((module) => module)
  ),
};
