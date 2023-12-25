package com.ecommerce.cart.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Getter
public class Cart {
    @NonNull
    private String customerId;
    private List<CartItem> items;
    private float total;
    private String currency;
}