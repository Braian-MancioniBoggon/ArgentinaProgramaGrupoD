import { Card, CardBody, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Tarea = ({tarea, borrarTarea, indice}) => {
    const [tareaRealizada, setTareaRealizada] = useState(false);
    const finalizarTarea = () => setTareaRealizada(!tareaRealizada);
    const iconoTareaRealizada = 'img/tareaRealizada.png' ;
    const iconoTareaSinRealizar = 'img/tareaSinRealizar.png' ;
    return(    
    <Card direction="row" overflow="hidden" variant="outline" bgColor="#ffffff" alignItems="center"borderRadius="15px" p="15px">
        <Image objectFit='cover' src={tareaRealizada ? iconoTareaRealizada : iconoTareaSinRealizar} alt='Check' h="30px" cursor="pointer" onClick={finalizarTarea} />
        <CardBody paddingBlock="0px">
          <Text textDecor={tareaRealizada ? "line-through" : "none"}>
            {tarea}
          </Text>
        </CardBody>
        <Image objectFit='cover' src='img/eliminar.png' alt='Check' h="30px" cursor="pointer" onClick={() => borrarTarea(tarea, indice)} />
    </Card>
    )
}

export { Tarea }