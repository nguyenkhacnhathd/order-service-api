import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, Generated, Entity } from 'typeorm';

@Entity('order')
export class Order {
    @PrimaryGeneratedColumn('increment')
    id: bigint;

    @Column({ type: 'bigint' })
    dispid: bigint;

    @Column({ type: 'integer' })
    customer_id: number;

    @Column({ type: 'integer' })
    ninushi_id: number;

    @Column({ type: 'date' })
    auction_date: Date;

    @Column({ type: 'text' })
    note: Text;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'integer' })
    created_by: number;

    @Column({ type: 'smallint' })
    cancel: number;

    @Column({ type: 'text', default: 0 })
    ninushi_note: Text;

    @Column({ type: 'smallint', default: 0 })
    is_feedback: number;

    @Column({ type: 'text' })
    private_note: Text;

    @Column({ type: 'text', array: true })
    tmp_data: Text[];

    @Column({ type: 'smallint', default: 0 })
    is_tmp_updated: number;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    modified_at: Date;

    @Column({ type: 'integer' })
    modified_by: number;

    @Column({ type: 'smallint', default: 0 })
    is_proceeded: number;

    @Column({ type: 'smallint', default: 0 })
    fax_sent: number;

    @Column({ type: 'smallint', default: 0 })
    is_autosplit: number;

    @Column({ type: 'integer' })
    splitted_from: number;

    @Column({ type: 'integer' })
    market_id: number;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    last_answered_at: Date;

    @Column({ type: 'integer' })
    last_answered_by: number;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    faxed_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    canceled_at: Date;

    @Column({ type: 'integer' })
    canceled_from: number;

    @Column({ type: 'integer' })
    canceled_by: number;

    @Generated('uuid')
    oid: number;
    
    @Column({ type: 'integer', default: 0 })
    noconf: number;

    @Column({ type: 'json' })
    tmp_data_json: object;

    @Column({ type: 'json' })
    shipping_address: object;

    @Column({ type: 'integer', array: true })
    original_ids: number[];

    @Column({ type: 'smallint' })
    pass_through: number;

    @Column({ type: 'smallint', default: 0 })
    is_transferred: number;

    @Column({ type: 'text' })
    cstid: string;

    @Column({ type: 'integer', array: true })
    unsubscribers: number[];

    @Column({ type: 'json' })
    metadata: object;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    first_replied_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    ng_replied_at: Date;

    @Column({ type: 'smallint', default: 0 })
    is_fake: number;

    @Column({ type: 'integer' })
    faked_by: number;

    @Column({ type: 'text' })
    purchase_method: string;

    @Column({ type: 'smallint', default: 0 })
    is_external_confirming: number;

    @Column({ type: 'integer' })
    customer_member_purchase_id: number;

    @Column({ type: 'integer' })
    purchase_amount: number;

    @Column({ type: 'integer' })
    shipping_fee: number;

    @Column({ type: 'integer' })
    vat_amount: number;

    @Column({ type: 'real' })
    vat_ratio: any;

    @Column({ type: 'text' })
    purchase_status: string;

    @Column({ type: 'jsonb' })
    purchase_data: object[];

    @Column({ type: 'text' })
    purchase_transaction_id: string;

    @Column({ type: 'smallint', default: 0})
    update_after_fix: number;

    @Column({ type: 'integer', nullable: true })
    billing_plan_id: number | null;
}