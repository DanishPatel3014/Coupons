import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Image,
    Container,
    HStack,
  
    
  } from '@chakra-ui/react';
 
  import { FaBraille } from 'react-icons/fa'
  import { BiStore} from 'react-icons/bi'
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { Link as ReactLink } from 'react-router-dom';
  import Logo from '../../../assets/images/logo.png'
  export default function Header() {
    const { isOpen, onToggle } = useDisclosure();

    const infocss = {
        color: '#fff',
        fontSize: '12px',
        fontWeight: '500',
        letterSpacing:'1px',
        textTransform:'uppercase',
        
      }
    
  
    return (
      <Box bg={'brand.100'} py={{ base: 4 }}>
        <Container maxW={'8xl'}>
        <Flex
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          
          px={{ base: 8 }}
          justifyContent={'space-between'}
          align={'center'}>
          <Flex
           
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Box as={ReactLink} to={'/'} rel="home" >
            <Image src={Logo}  width={{ base: '36%', lg: '80%' }}/>
            </Box>
          <Flex justify={{ base: 'center', md: 'center' }} display={{ base: 'none', lg: 'flex' }}>
            
  
            <Flex justify={{ base: 'center', md: 'center' }}  display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <HStack spacing={6} >
            <Box textAlign={'center'}>
            <Icon margin={'auto'} display={'block'} boxSize='20px' as={BiStore} color={'brand.300'} />
            <Link sx={infocss} as={ReactLink} to={'/'}> Stores</Link>
            </Box>
            <Box>
            <Icon margin={'auto'}  display={'block'} boxSize='20px' as={FaBraille} color={'brand.300'} />
            <Link sx={infocss} as={ReactLink} to={'/'}>Categories</Link>
            </Box>
         

        </HStack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
        </Container>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'gray.900');
    const linkHoverColor = useColorModeValue('gray.400', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Home',
    
    },
    {
        label: 'About Us',
        href: '#',
      },
      {
        label: 'Latest Offers',
        href: '#',
      },
    {
      label: '20 Off Offers',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
        label: 'Contact Us',
        href: '#',
      },
    
  ];