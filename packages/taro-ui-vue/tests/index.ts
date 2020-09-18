import AtActionSheet from './components/action-sheet'
import AtActionSheetItem from './components/action-sheet/body/item'
import AtActivityIndicator from './components/activity-indicator'
import AtAvatar from './components/avatar'
import AtBadge from './components/badge'
import AtButton from './components/button'
import AtCard from './components/card'
import AtCheckbox from './components/checkbox'
import AtFloatLayout from './components/float-layout'
import AtForm from './components/form'
import AtGrid from './components/grid'
import AtIcon from './components/icon'
import AtInput from './components/input'
import AtInputNumber from './components/input-number'
import AtList from './components/list'
import AtListItem from './components/list/item'
import AtModal from './components/modal'
import AtModalHeader from './components/modal/header'
import AtModalContent from './components/modal/content'
import AtModalAction from './components/modal/action'
import AtNavBar from './components/nav-bar'
import AtNoticebar from './components/noticebar'
import AtPagination from './components/pagination'
import AtProgress from './components/progress'
import AtRadio from './components/radio'
import AtRate from './components/rate'
import AtSegmentedControl from './components/segmented-control'
import AtSwitch from './components/switch'
import AtTabBar from './components/tab-bar'
import AtTabs from './components/tabs'
import AtTabsPane from './components/tabs-pane'
import AtTag from './components/tag'
import AtTextarea from './components/textarea'
import AtTimeline from './components/timeline'
import AtToast from './components/toast'
import AtAccordion from './components/accordion'
import AtSlider from './components/slider'
import AtSwipeAction from './components/swipe-action'
import AtSearchBar from './components/search-bar'
import AtLoadMore from './components/load-more'
import AtDivider from './components/divider'
import AtCountdown from './components/countdown'
import AtSteps from './components/steps'
import AtCurtain from './components/curtain'
import AtMessage from './components/message'
import AtImagePicker from './components/image-picker'
import AtRange from './components/range'
import AtIndexes from './components/indexes'
import AtCalendar from './components/calendar'
import AtFab from './components/fab'
import AtDrawer from './components/drawer'

/* 私有的组件  */
import AtLoading from './components/loading'

export {
  AtActionSheet,
  AtActionSheetItem,
  AtActivityIndicator,
  AtAvatar,
  AtBadge,
  AtButton,
  AtCard,
  AtCheckbox,
  AtFloatLayout,
  AtForm,
  AtGrid,
  AtIcon,
  AtInput,
  AtInputNumber,
  AtList,
  AtListItem,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtNavBar,
  AtNoticebar,
  AtPagination,
  AtProgress,
  AtRadio,
  AtRate,
  AtSegmentedControl,
  AtSwitch,
  AtTabBar,
  AtTabs,
  AtTabsPane,
  AtTag,
  AtTextarea,
  AtTimeline,
  AtToast,
  AtAccordion,
  AtSlider,
  AtSwipeAction,
  AtSearchBar,
  AtLoadMore,
  AtDivider,
  AtCountdown,
  AtSteps,
  AtCurtain,
  AtMessage,
  AtImagePicker,
  AtRange,
  AtIndexes,
  AtCalendar,
  AtFab,
  AtLoading,
  AtDrawer,
}

const components = [
  AtActionSheet,
  AtActionSheetItem,
  AtActivityIndicator,
  AtAvatar,
  AtBadge,
  AtButton,
  AtCard,
  AtCheckbox,
  AtFloatLayout,
  AtForm,
  AtGrid,
  AtIcon,
  AtInput,
  AtInputNumber,
  AtList,
  AtListItem,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtNavBar,
  AtNoticebar,
  AtPagination,
  AtProgress,
  AtRadio,
  AtRate,
  AtSegmentedControl,
  AtSwitch,
  AtTabBar,
  AtTabs,
  AtTabsPane,
  AtTag,
  AtTextarea,
  AtTimeline,
  AtToast,
  AtAccordion,
  AtSlider,
  AtSwipeAction,
  AtSearchBar,
  AtLoadMore,
  AtDivider,
  AtCountdown,
  AtSteps,
  AtCurtain,
  AtMessage,
  AtImagePicker,
  AtRange,
  AtIndexes,
  AtCalendar,
  AtFab,
  AtLoading,
  AtDrawer,
]
interface Comp {
  options?: {
    [key: string]: Comp,
  };
  [key: string]: any;
}

const install = function (Vue) {
  components.forEach((comp: Comp) => {
    if (comp.extendOptions) {
      // 压缩后 vue-class-component 组件的 options.name 会改变需要找回正确的组件名
      let options = comp.options || {}
      const name = comp.extendOptions.name
      // 压缩后 vue-class-component 组件的 options.name 会是小写字母开头的
      if (/^[a-z]/.test(name)) {
        options.name = comp.options ? comp.options.components[name].superOptions.name : name
      }
      Vue.component(options.name, options)
    } else {
      Vue.component(comp.name, comp)
    }
  })
}

export default install
