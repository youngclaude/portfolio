import React from "react";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import {SunIcon, MoonIcon} from '@chakra-ui/icons'
import { AnimatePresence, motion } from "framer-motion";

const ThemeToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{display: 'inline-block'}}
                key={useColorModeValue('light', 'dark')}
                initial={{y: -20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{y: 20, opacity: 0.2}}
            >

                <IconButton aria-label="Toggle Theme"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
                    onClick={toggleColorMode}
                ></IconButton>
            </motion.div>

        </AnimatePresence>
    )
}

export default ThemeToggleButton;


