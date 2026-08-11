import { FieldDataType } from '@vizora/core';
export interface FieldProfile {
    field: string;
    type: FieldDataType;
    distinctCount: number;
}
export declare function profileField(data: Record<string, unknown>[], field: string): FieldProfile;
//# sourceMappingURL=profile.d.ts.map