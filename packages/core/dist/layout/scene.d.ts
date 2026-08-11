export interface SceneNode {
    id: string;
    type: 'group' | 'line' | 'rect' | 'circle' | 'text' | 'path';
    attributes: Record<string, string | number>;
    children?: SceneNode[];
}
export interface SceneGraph {
    width: number;
    height: number;
    viewBox: string;
    children: SceneNode[];
}
export declare function buildSceneGraph(inputSpec: unknown): SceneGraph;
//# sourceMappingURL=scene.d.ts.map