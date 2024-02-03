import Button from '@/components/Generics/Button'
import { requestLocalFontsPermission } from '@/helpers/LocalFontPermissions'
import Text from '@/components/Generics/Text'
import { type ReactElement } from 'react'
import { usePolicyStore } from '@/stores/PolicyStore'

const NotAccepted = (): ReactElement => {
  const { setHasAccepted } = usePolicyStore()

  const handleClick = async (): Promise<void> => {
    requestLocalFontsPermission(true).then(accepted => {
      setHasAccepted(accepted)
    })
  }

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center text-txt-sec">
      <Text
        style={{
          width: '50%',
        }}
        size={18}
        weight="200"
        disabled
        align="center"
        balance
      >
        {'We will need you to give us access to read your local fonts :)'}
      </Text>
      <Button onClick={handleClick}>Request Access</Button>
    </div>
  )
}

export default NotAccepted
