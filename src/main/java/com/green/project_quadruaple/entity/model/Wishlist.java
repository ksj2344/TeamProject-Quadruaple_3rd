package com.green.project_quadruaple.entity.model;

import com.green.project_quadruaple.entity.base.CreatedAt;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Wishlist extends CreatedAt {

    @EmbeddedId
    private WishlistId id;

    @MapsId("userId") // userId 필드가 복합 키의 일부임을 나타냄
    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private User userId;

    @MapsId("strfId") // strfId 필드가 복합 키의 일부임을 나타냄
    @JoinColumn(name = "strf_id", columnDefinition = "CHAR(10) DEFAULT 0")
    @ManyToOne(fetch = FetchType.LAZY)
    private StayTourRestaurFest strfId;
}
