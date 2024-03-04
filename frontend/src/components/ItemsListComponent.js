import React from "react";
import { Form, Button } from "react-bootstrap";
import FormDetailsContainer from "./FormDetailsContainer";
import SelectFieldComponent from "./SelectFieldComponent";


function ItemsListComponent({ itemsData, handleItemChange, isEditing, handleAddItem, produtos }) {
    return (
        <FormDetailsContainer>
            {itemsData.map((item, index) => (
                <div key={index}>
                    <h3>Item {index + 1}</h3>
                    <Form.Group controlId={`produto_${index}`}>
                        <Form.Label>Produto</Form.Label>
                        <SelectFieldComponent
                            options={[
                                { id: "", nome: "Selecione um produto" },
                                ...produtos,
                            ]}
                            value={item.produto}
                            onChange={(e) =>
                                handleItemChange(index, "produto", e.target.value)
                            }
                            isEditing={isEditing}
                        />
                    </Form.Group>
                    <Form.Group controlId={`quantidade_${index}`}>
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control
                            type="number"
                            value={item.quantidade}
                            onChange={(e) =>
                                handleItemChange(index, "quantidade", e.target.value)
                            }
                            disabled={!isEditing}
                        />
                    </Form.Group>
                    <Form.Group controlId={`valor_unitario_${index}`}>
                        <Form.Label>Valor Unitário</Form.Label>
                        <Form.Control
                            type="number"
                            value={item.valor_unitario}
                            onChange={(e) =>
                                handleItemChange(index, "valor_unitario", e.target.value)
                            }
                            disabled={!isEditing}
                        />
                    </Form.Group>
                    <Form.Group controlId={`custo_${index}`}>
                        <Form.Label>Custo</Form.Label>
                        <Form.Control
                            type="number"
                            value={item.custo}
                            onChange={(e) =>
                                handleItemChange(index, "custo", e.target.value)
                            }
                            disabled={!isEditing}
                        />
                    </Form.Group>
                </div>
            ))}
            <Button onClick={handleAddItem} disabled={!isEditing} className="mt-3">
                Adicionar Item
            </Button>
        </FormDetailsContainer>
    );
}

export default ItemsListComponent;
