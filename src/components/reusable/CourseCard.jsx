import React, { useState } from 'react';
import { Box, Image, Skeleton, Text } from '@chakra-ui/react'


export default function CourseCard({ data }) {
    const { tag, img, title, description, madeBy, madeAt, totalReadMinutes } = data;

    const [loading, setLoading] = useState(false)

    setTimeout(() => {
        setLoading(true)
    }, 2000)
    return (
        <>
            <Box maxW="sm" borderWidth="1px" borderRadius="3xl" overflow="hidden" className='courseCard'>
                <Skeleton isLoaded={loading}>
                    <Image src={img} alt={title} h="200px" objectFit="cover" />
                </Skeleton>

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Skeleton isLoaded={loading}>
                            <span className="inline-block bg-teal-200 rounded-full px-2 py-1 text-sm font-semibold text-teal-800 mr-2">{tag}</span>
                        </Skeleton>
                    </Box>
                    <Skeleton isLoaded={loading}>
                        <Text fontWeight="semibold" fontSize="xl" mt="2" lineHeight="tight" isTruncated>{title}</Text>
                    </Skeleton>
                    <Skeleton isLoaded={loading}>
                        <Text mt="2" fontSize="sm">{description}</Text>
                    </Skeleton>

                    <Skeleton isLoaded={loading}>
                        <Box className='flex mt-4'>
                            <Text>By <b>{madeBy}</b></Text>
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={loading}>
                        <Box className='flex justify-between items-center mt-4'>
                            <Text color="gray.500" fontSize="sm">{`${madeAt}`}</Text>
                            <Text color="gray.500" fontSize="sm">{totalReadMinutes} min read</Text>
                        </Box>
                    </Skeleton>

                </Box>
            </Box>
        </>
    )
}
